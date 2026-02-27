export default function Home() {
  const whatsappLink = "https://wa.me/5515998050051?text=Olá, gostaria de saber mais sobre os laudos!";

  return (
    <main>
      <header className="hero">
        <div className="container hero-pattern">
          <div className="animate-fade-up">
            <span className="hero-part1">Excelência encontra</span>
            <span className="hero-part2">Precisão.</span>
            <p style={{ maxWidth: '600px', margin: '30px 0', opacity: 0.9 }}>
              Conectamos sua clínica aos melhores radiologistas. Laudos em tempo recorde, gestão de BI e formulários inteligentes para escalar seu faturamento.
            </p>
            <a href={whatsappLink} target="_blank" className="btn-primary">
              Iniciar Consultoria
            </a>
          </div>
        </div>
      </header>

      <section id="servicos" className="section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Serviços de Alto Padrão.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '60px' }}>
            <div className="glass-panel">
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.1em' }}>01 / MÉDICO</div>
              <h3>Laudos à Distância</h3>
              <p>Radiologistas subespecialistas entregando diagnósticos precisos em até 24 horas para exames de imagem.</p>
            </div>
            <div className="glass-panel">
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.1em' }}>02 / TECNOLOGIA</div>
              <h3>Formulários Online</h3>
              <p>Digitalize triagens e anamneses. Reduza erros e elimine o papel com nossa plataforma integrada.</p>
            </div>
            <div className="glass-panel">
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.1em' }}>03 / DADOS</div>
              <h3>BI & Gestão Financeira</h3>
              <p>Controle glosas, faturamento e produtividade em tempo real com painéis analíticos exclusivos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ opacity: 0.5, marginBottom: '20px' }}>A maioria do setor foca em: processos burocráticos.</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Nós focamos em: <span style={{ color: 'var(--primary)' }}>Sua Performance.</span>
          </h2>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { t: "Qualidade", d: "Padrão ouro em diagnósticos, revisados por uma junta de especialistas seniores." },
              { t: "Suporte", d: "Atendimento técnico humanizado 24/7 para garantir que sua clínica nunca pare." },
              { t: "Segurança", d: "Criptografia de ponta a ponta e conformidade rigorosa com a LGPD em todos os dados." }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '30px' }}>
                <h3 style={{ fontSize: '1.2rem' }}>{item.t}</h3>
                <p style={{ fontSize: '0.95rem' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '80px 40px', background: '#fff' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Escale sua Clínica hoje.</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Agende uma conversa estratégica com nossos especialistas e descubra como podemos acelerar seu negócio.</p>
            <a href={whatsappLink} target="_blank" className="btn-primary" style={{ fontSize: '1.2rem', padding: '20px 60px' }}>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '80px 0 20px', background: 'var(--text-dark)', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            <div>
              <div className="logo" style={{ color: '#fff', marginBottom: '10px' }}>CONECTA LAUDOS</div>
              <p style={{ opacity: 0.5, maxWidth: '300px' }}>O elo definitivo entre tecnologia médica e resultados exponenciais para sua clínica.</p>
            </div>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              <div style={{ color: '#00ff00' }}>● SYSTEM OPERATIONAL</div>
              <div style={{ opacity: 0.5, marginTop: '5px' }}>v3.4 // GLOBAL DEPLOY</div>
            </div>
          </div>
          <div style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.3, fontSize: '0.75rem' }}>
            Photos by <a href="https://unsplash.com" target="_blank" style={{ textDecoration: 'underline' }}>Unsplash</a> | 
            Created by <a href="https://rapisite.com.br" target="_blank" style={{ textDecoration: 'underline' }}>RapiSite</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
