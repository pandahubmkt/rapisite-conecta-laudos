export default function Servicos() {
  const servicos = [
    { t: "Laudos de Radiologia", d: "Entrega em até 24h para exames de Raio-X, Tomografia e Ressonância." },
    { t: "Laudos de Cardiologia", d: "Especialistas focados em ECG e Holter com precisão imediata." },
    { t: "Formulários Customizados", d: "Criação de anamneses digitais específicas para o fluxo da sua clínica." },
    { t: "Painel de BI", d: "Indicadores de faturamento, produtividade e glosas em tempo real." },
    { t: "Integração de Sistemas", d: "API aberta para conectar seus equipamentos diretamente à nossa rede." },
    { t: "Auditoria Médica", d: "Revisão e segunda opinião para casos complexos ou jurídicos." }
  ];

  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Soluções Corporativas.</h2>
            <p>Infraestrutura médica completa sob demanda para sua empresa.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {servicos.map((s, i) => (
              <div key={i} className="glass-panel">
                <div style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '15px' }}>
                  {String(i + 1).padStart(2, '0')} // SVC
                </div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
