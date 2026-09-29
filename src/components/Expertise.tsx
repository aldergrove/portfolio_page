function Expertise() {
  const areas = [
    {
      title: 'Engineering',
      items: [
        'Project management',
        'Product development',
        'Product data',
        'Quality',
      ],
    },
    {
      title: 'Tools & Automation',
      items: [
        'Excel & VBA',
        'Data & Testing',
        'ERP & PDM',
        'Process development',
      ],
    },
    {
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
    <section className="expertise" id="expertise">
      <p className="section-label">EXPERTISE</p>

      <div className="work-grid">
        {areas.map((area) => (
          <article className="work-area" key={area.title}>
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