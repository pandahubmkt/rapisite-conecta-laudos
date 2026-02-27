export default function Sobre() {
  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Nossa História.</h2>
              <p style={{ marginTop: '20px' }}>
                A Conecta Laudos nasceu da visão de que a medicina e a tecnologia devem caminhar juntas para salvar o recurso mais valioso do setor de saúde: o tempo.
              </p>
              <p style={{ marginTop: '15px' }}>
                Fundada por especialistas com décadas de experiência em radiologia e gestão hospitalar, nossa missão é democratizar o acesso a diagnósticos de alta complexidade em todo o país.
              </p>
            </div>
            <div className="glass-panel" style={{ textAlign: 'center', padding: '60px' }}>
              <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🌐</div>
              <h3>Alcance Nacional</h3>
              <p>Atendemos centenas de clínicas de ponta a ponta do Brasil.</p>
            </div>
          </div>

          <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div className="glass-panel">
              <h3 className="text-gradient">Missão</h3>
              <p>Conectar médicos e pacientes através de laudos precisos e tecnologia inovadora.</p>
            </div>
            <div className="glass-panel">
              <h3 className="text-gradient">Visão</h3>
              <p>Ser a maior plataforma de integração e inteligência médica da América Latina.</p>
            </div>
            <div className="glass-panel">
              <h3 className="text-gradient">Valores</h3>
              <p>Ética absoluta, agilidade humana e obsessão pela precisão diagnóstica.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
