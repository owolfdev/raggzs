<Head>
        <title>Raggzs</title>
        <meta property="og:title" content="Raggzs" key="title" />
        <meta
          name="description"
          content="Canvas bags. T-shirts. Illustrated gear for alternative people."
        />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="https://raggzs.com/"></link> */}
      </Head>
      <div className="bgWrap">
        <Image
          alt="Mountains"
          src="/images/home/raggzs-hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="wrap">
        <section className={styles.mainSection}>
          <div className={styles.heroText}>Raggzs</div>
          <div className={styles.homeText}>
            Illustrated gear for alternative individuals. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </div>
          <div>
            <button
              onClick={() => router.push("https://raggzs.bigcartel.com/")}
              className={styles.shopButton}
            >
              Shop Now
            </button>
          </div>
        </section>
        <footer className={styles.footer}>
          {" "}
          <p className={styles.footerText}>
            raggzs canvas bags 空手プリントチャンピオンエキスパート
          </p>
        </footer>
      </div>
