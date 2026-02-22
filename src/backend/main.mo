import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import OutCall "http-outcalls/outcall";


// specify the data migration function in with-clause

actor {
  type GovernmentScheme = {
    id : Nat;
    name : Text;
    description : Text;
    eligibility : Text;
    applicationProcess : Text;
    contactInfo : Text;
    level : SchemeLevel;
  };

  type SchemeLevel = {
    #central;
    #state;
  };

  type AgriculturalResource = {
    id : Nat;
    title : Text;
    content : Text;
    resourceType : ResourceType;
  };

  type ResourceType = {
    #bestPractice;
    #financialLiteracy;
    #stressManagement;
  };

  type MarketPrice = {
    commodity : Text;
    price : Nat;
    unit : Text;
    marketLocation : Text;
  };

  module MarketPrice {
    public func compare(price1 : MarketPrice, price2 : MarketPrice) : Order.Order {
      Text.compare(price1.commodity, price2.commodity);
    };
  };

  type SupportContact = {
    id : Nat;
    name : Text;
    phoneNumber : Text;
    email : Text;
    organization : Text;
  };

  type WeatherData = {
    location : Text;
    temperature : Float;
    humidity : Nat;
    windSpeed : Float;
    rainfall : Nat;
  };

  type CrisisType = {
    #suicidalThoughts;
    #loanRepaymentStress;
    #emotionalDistress;
  };

  type CrisisReport = {
    id : Nat;
    farmerName : Text;
    location : Text;
    contactNumber : Text;
    crisisType : CrisisType;
    description : Text;
    timestamp : Int;
    resolved : Bool;
  };

  type CropStat = {
    cropName : Text;
    year : Nat;
    yield : Nat;
    price : Nat;
    region : Text;
  };

  var nextId = 1;

  let governmentSchemes = Map.empty<Nat, GovernmentScheme>();
  let agriculturalResources = Map.empty<Nat, AgriculturalResource>();
  let marketPrices = Map.empty<Text, MarketPrice>();
  let supportContacts = Map.empty<Nat, SupportContact>();
  let crisisReports = Map.empty<Nat, CrisisReport>();
  let cropStatistics = Map.empty<Text, [CropStat]>();

  public query ({ caller }) func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  public shared ({ caller }) func addGovernmentScheme(name : Text, description : Text, eligibility : Text, applicationProcess : Text, contactInfo : Text, level : SchemeLevel) : async Nat {
    let id = nextId;
    let scheme : GovernmentScheme = {
      id;
      name;
      description;
      eligibility;
      applicationProcess;
      contactInfo;
      level;
    };
    governmentSchemes.add(id, scheme);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllGovernmentSchemes() : async [GovernmentScheme] {
    governmentSchemes.values().toArray();
  };

  public query ({ caller }) func getSchemesByLevel(level : SchemeLevel) : async [GovernmentScheme] {
    governmentSchemes.values().toArray().filter(
      func(scheme) { scheme.level == level }
    );
  };

  public shared ({ caller }) func addAgriculturalResource(title : Text, content : Text, resourceType : ResourceType) : async Nat {
    let id = nextId;
    let resource : AgriculturalResource = {
      id;
      title;
      content;
      resourceType;
    };
    agriculturalResources.add(id, resource);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllAgriculturalResources() : async [AgriculturalResource] {
    agriculturalResources.values().toArray();
  };

  public query ({ caller }) func getResourcesByType(resourceType : ResourceType) : async [AgriculturalResource] {
    agriculturalResources.values().toArray().filter(
      func(resource) { resource.resourceType == resourceType }
    );
  };

  public shared ({ caller }) func addMarketPrice(commodity : Text, price : Nat, unit : Text, marketLocation : Text) : async () {
    let marketPrice : MarketPrice = {
      commodity;
      price;
      unit;
      marketLocation;
    };
    marketPrices.add(commodity, marketPrice);
  };

  public query ({ caller }) func getMarketPrice(commodity : Text) : async MarketPrice {
    switch (marketPrices.get(commodity)) {
      case (null) { Runtime.trap("Market price not found") };
      case (?price) { price };
    };
  };

  public query ({ caller }) func getAllMarketPrices() : async [MarketPrice] {
    marketPrices.values().toArray().sort();
  };

  public shared ({ caller }) func addSupportContact(name : Text, phoneNumber : Text, email : Text, organization : Text) : async Nat {
    let id = nextId;
    let contact : SupportContact = {
      id;
      name;
      phoneNumber;
      email;
      organization;
    };
    supportContacts.add(id, contact);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllSupportContacts() : async [SupportContact] {
    supportContacts.values().toArray();
  };

  public shared ({ caller }) func getWeatherData(location : Text) : async Text {
    let apiUrl = "https://api.weather.com/v3/wx/conditions/current?apiKey=your_api_key&language=en-US&format=json&location=" # location;
    await OutCall.httpGetRequest(apiUrl, [], transform);
  };

  public shared ({ caller }) func reportCrisis(farmerName : Text, location : Text, contactNumber : Text, crisisType : CrisisType, description : Text, timestamp : Int) : async Nat {
    let id = nextId;
    let crisisReport : CrisisReport = {
      id;
      farmerName;
      location;
      contactNumber;
      crisisType;
      description;
      timestamp;
      resolved = false;
    };
    crisisReports.add(id, crisisReport);
    nextId += 1;
    id;
  };

  public shared ({ caller }) func resolveCrisis(reportId : Nat) : async () {
    let report = switch (crisisReports.get(reportId)) {
      case (null) { Runtime.trap("Crisis report not found") };
      case (?found) { found };
    };
    let resolvedReport = { report with resolved = true };
    crisisReports.add(reportId, resolvedReport);
  };

  public query ({ caller }) func getAllCrisisReports() : async [CrisisReport] {
    crisisReports.values().toArray();
  };

  public query ({ caller }) func getUnresolvedCrisisReports() : async [CrisisReport] {
    crisisReports.values().toArray().filter(
      func(report) { not report.resolved }
    );
  };

  public shared ({ caller }) func addCropStatistic(cropName : Text, year : Nat, yield : Nat, price : Nat, region : Text) : async () {
    let stat : CropStat = {
      cropName;
      year;
      yield;
      price;
      region;
    };

    switch (cropStatistics.get(cropName)) {
      case (null) {
        cropStatistics.add(cropName, [stat]);
      };
      case (?existingStats) {
        let newStats = existingStats.concat([stat]);
        cropStatistics.add(cropName, newStats);
      };
    };
  };

  public query ({ caller }) func getCropStatistics(cropName : Text) : async [CropStat] {
    switch (cropStatistics.get(cropName)) {
      case (null) { [] };
      case (?stats) { stats };
    };
  };

  public query ({ caller }) func getCropStatisticsByYear(year : Nat) : async [CropStat] {
    var filtered : [CropStat] = [];
    for ((_, stats) in cropStatistics.entries()) {
      let yearStats : [CropStat] = stats.filter(
        func(stat) { stat.year == year }
      );
      filtered := filtered.concat(yearStats);
    };
    filtered;
  };

  public query ({ caller }) func getCropStatisticsByRegion(region : Text) : async [CropStat] {
    var filtered : [CropStat] = [];
    for ((_, stats) in cropStatistics.entries()) {
      let regionStats : [CropStat] = stats.filter(
        func(stat) { stat.region == region }
      );
      filtered := filtered.concat(regionStats);
    };
    filtered;
  };
};
