function Expertise() {
  const areas = [
    {
      number: '01',
      title: 'Engineering',
      items: [
        'Project management',
        'Product development',
        'Product data',
        'Quality',
      ],
    },
    {
      number: '02',
      title: 'Tools & Automation',
      items: [
        'Excel & VBA',
        'Data & Testing',
        'ERP & PDM',
        'Process development',
      ],
    },
    {
      number: '03',
      title: 'Creative',
      items: [
        'Music production',
        'Improv theater',
        'Coding',
        'Film production',
      ],
    },
  ]

  return (
    <section className="selected-work" id="expertise">
      <p className="section-label">EXPERTISE</p>

      <div className="work-grid">
        {areas.map((area) => (
          <article className="work-area" key={area.title}>
            <span className="work-number">{area.number}</span>

            <h2>{area.title}</h2>

            <ul>
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Expertise