import { MultiSelect } from '@mantine/core';
import './Categories.css';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

function Categories() {
  return (
  <div className="option-section">
    <MultiSelect
      data={data}
      label="Choose the categories"
      placeholder="Categories"
    />
    <MultiSelect
      data={data}
      label="Choose the categories"
      placeholder="Categories"
    />
    <MultiSelect
      data={data}
      label="Choose the categories"
      placeholder="Categories"
    />
    </div>
  );
}

export default Categories;