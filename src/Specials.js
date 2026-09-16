function Specials() {
  return (
    <section className="specials">
      <h2>This Week's Specials</h2>

      <div className="specials-grid">

        <article className="special-card">
          <img
            src="/greek salad (2).jpg"
            alt="Greek Salad"
          />

          <div className="special-card-content">
            <h3>Greek Salad</h3>
            <p>
              Fresh salad with tomatoes, olives and feta cheese.
            </p>
          </div>
        </article>

        <article className="special-card">
          <img
            src="/bruchetta.svg"
            alt="Bruschetta"
          />

          <div className="special-card-content">
            <h3>Bruschetta</h3>
            <p>
              Grilled bread with fresh ingredients.
            </p>
          </div>
        </article>

        <article className="special-card">
          <img
            src="/lemon dessert (2).jpg"
            alt="Lemon Dessert"
          />

          <div className="special-card-content">
            <h3>Lemon Dessert</h3>
            <p>
              Traditional Little Lemon dessert.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Specials;