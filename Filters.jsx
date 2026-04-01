function Filters({ current, onChange }) {
  const filters = ['All', 'Active', 'Completed']

  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          className={current === f ? 'active' : ''}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default Filters
