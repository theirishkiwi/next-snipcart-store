import Head from 'next/head'

import { FaShoppingCart } from 'react-icons/fa';

import styles from '../styles/Home.module.css'

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Picked Organic Market Garden</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <img src="/logo.svg" alt="Picked Organic" width="200" height="64" />
    


          <p className={styles.description}>
            <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
              <img src="/veg-box.svg" width="30" />	            
    
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price">£0.00</span>
            </a>
          </p>
        </div>

        <div className={styles.grid}>

          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of £{product.title}`} />
                <h5>{ product.title }</h5>
                <p>{ product.subtitle }</p>
                <h4 className={styles.cardDescription}>{ product.description }</h4>
                <p className={styles.cardDescription}>{ product.description1 }</p>
                <p className={styles.cardDescription}>{ product.description2 }</p>
                <p className={styles.cardDescription}>{ product.description3 }</p>
                <p className={styles.cardDescription}>{ product.description4 }</p>
                <p className={styles.cardDescription}>{ product.description5 }</p>
                <p className={styles.cardDescription}>{ product.description6 }</p>
                <p className={styles.cardDescription}>{ product.description7 }</p>
                <p className={styles.cardDescription}>{ product.description8 }</p>
                <p className={styles.cardDescription}>{ product.description9 }</p>
                <p className={styles.cardDescription}>{ product.description10 }</p>
                <p className={styles.cardDescription}>{ product.description11 }</p>
                <p className={styles.cardDescription}>{ product.description12 }</p>
                <p><b>£{ product.price }</b></p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                    data-item-custom1-name="Notes/Special Requests"
                  >
                    Add to Cart
                  </button>
                  <h6 style={{color: "red"}}>* order deadline midnight 17th December.</h6>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Picked Organic 2020
      </footer>

      <script async src="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js" />
      <div id="snipcart" data-api-key="NTBlYjIxMTctZTJhMy00OTViLWJmOGUtMjBhODE4OTBjNGIxNjM3MDI2MTI1Mjk1NTczMjAz" hidden></div>
    </div>
  )
}
