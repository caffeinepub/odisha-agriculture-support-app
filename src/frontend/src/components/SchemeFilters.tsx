import { SchemeLevel } from '../backend';
import { Button } from '@/components/ui/button';

interface SchemeFiltersProps {
  selectedLevel: SchemeLevel | 'all';
  onLevelChange: (level: SchemeLevel | 'all') => void;
}

export default function SchemeFilters({ selectedLevel, onLevelChange }: SchemeFiltersProps) {
  const filters: Array<{ value: SchemeLevel | 'all'; label: string }> = [
    { value: 'all', label: 'All Schemes' },
    { value: SchemeLevel.central, label: 'Central Schemes' },
    { value: SchemeLevel.state, label: 'State Schemes' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={selectedLevel === filter.value ? 'default' : 'outline'}
          onClick={() => onLevelChange(filter.value)}
          className="text-base"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
