import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface GovernmentScheme {
    id: bigint;
    applicationProcess: string;
    contactInfo: string;
    name: string;
    description: string;
    level: SchemeLevel;
    eligibility: string;
}
export interface AgriculturalResource {
    id: bigint;
    title: string;
    content: string;
    resourceType: ResourceType;
}
export interface CropStat {
    region: string;
    year: bigint;
    cropName: string;
    price: bigint;
    yield: bigint;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface CrisisReport {
    id: bigint;
    resolved: boolean;
    description: string;
    timestamp: bigint;
    contactNumber: string;
    crisisType: CrisisType;
    location: string;
    farmerName: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface MarketPrice {
    unit: string;
    marketLocation: string;
    price: bigint;
    commodity: string;
}
export interface SupportContact {
    id: bigint;
    name: string;
    email: string;
    organization: string;
    phoneNumber: string;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export enum CrisisType {
    suicidalThoughts = "suicidalThoughts",
    emotionalDistress = "emotionalDistress",
    loanRepaymentStress = "loanRepaymentStress"
}
export enum ResourceType {
    stressManagement = "stressManagement",
    bestPractice = "bestPractice",
    financialLiteracy = "financialLiteracy"
}
export enum SchemeLevel {
    central = "central",
    state = "state"
}
export interface backendInterface {
    addAgriculturalResource(title: string, content: string, resourceType: ResourceType): Promise<bigint>;
    addCropStatistic(cropName: string, year: bigint, yield: bigint, price: bigint, region: string): Promise<void>;
    addGovernmentScheme(name: string, description: string, eligibility: string, applicationProcess: string, contactInfo: string, level: SchemeLevel): Promise<bigint>;
    addMarketPrice(commodity: string, price: bigint, unit: string, marketLocation: string): Promise<void>;
    addSupportContact(name: string, phoneNumber: string, email: string, organization: string): Promise<bigint>;
    getAllAgriculturalResources(): Promise<Array<AgriculturalResource>>;
    getAllCrisisReports(): Promise<Array<CrisisReport>>;
    getAllGovernmentSchemes(): Promise<Array<GovernmentScheme>>;
    getAllMarketPrices(): Promise<Array<MarketPrice>>;
    getAllSupportContacts(): Promise<Array<SupportContact>>;
    getCropStatistics(cropName: string): Promise<Array<CropStat>>;
    getCropStatisticsByRegion(region: string): Promise<Array<CropStat>>;
    getCropStatisticsByYear(year: bigint): Promise<Array<CropStat>>;
    getMarketPrice(commodity: string): Promise<MarketPrice>;
    getResourcesByType(resourceType: ResourceType): Promise<Array<AgriculturalResource>>;
    getSchemesByLevel(level: SchemeLevel): Promise<Array<GovernmentScheme>>;
    getUnresolvedCrisisReports(): Promise<Array<CrisisReport>>;
    getWeatherData(location: string): Promise<string>;
    reportCrisis(farmerName: string, location: string, contactNumber: string, crisisType: CrisisType, description: string, timestamp: bigint): Promise<bigint>;
    resolveCrisis(reportId: bigint): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
}
