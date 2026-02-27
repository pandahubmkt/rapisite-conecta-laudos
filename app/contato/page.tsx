export default function Contato() {
  return (
    <main className="page-content">
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Fale com a elite.</h2>
              <p style={{ marginTop: '30px', fontSize: '1.1rem' }}>
                Nossos especialistas estão prontos para desenhar a melhor solução para sua clínica.
              </p>
              
              <div style={{ marginTop: '60px' }}>
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>WhatsApp Central</span>
                  <a href="https://wa.me/5515998050051" target="_blank" style={{ fontSize: '1.5rem', fontWeight: '800' }}>15 99805-0051</a>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Email Corporativo</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>lepantop@gmail.com</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Localização</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Atendimento nacional a partir de Sorocaba/SP.</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ background: 'var(--bg-soft)', border: 'none' }}>
              <form action="mailto:lepantop@gmail.com" method="POST" encType="text/plain">
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '8px' }}>NOME COMPLETO</label>
                  <input type="text" name="nome" required style={{ width: '100%', padding: '15px', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px' }} />
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '8px' }}>NOME DA CLÍNICA</label>
                  <input type="text" name="empresa" required style={{ width: '100%', padding: '15px', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px' }} />
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '8px' }}>WHATSAPP</label>
                  <input type="tel" name="whatsapp" required style={{ width: '100%', padding: '15px', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px' }} />
                </div>
                <div style={{ marginBottom: '35px' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '8px' }}>MENSAGEM</label>
                  <textarea name="mensagem" rows={4} required style={{ width: '100%', padding: '15px', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
