import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const prints = [
  {name: 'Fidget Cube', price: '$2.00', slug: 'fidget-cube', category: 'Fidget'},
  {name: 'Spinning Top', price: '$1.00', slug: 'spinning-top', category: 'Toy'},
  {name: 'Mini Sword Keychain', price: '$2.00', slug: 'mini-sword-keychain', category: 'Collectible'},
  {name: 'Roblox Character Figure', price: '$3.00', slug: 'roblox-figure', category: 'Collectible'},
  {name: 'Click Button Fidget', price: '$1.50', slug: 'click-button-fidget', category: 'Fidget'},
  {name: 'Phone Stand', price: '$2.50', slug: 'phone-stand', category: 'Practical'},
  {name: 'Dice Set (D6 + D20)', price: '$3.00', slug: 'dice-set', category: 'Game'},
  {name: 'Name Tag Badge', price: '$2.00', slug: 'name-tag-badge', category: 'Custom'},
  {name: 'Articulated Dragon', price: '$4.00', slug: 'articulated-dragon', category: 'Collectible'},
  {name: 'Gear Spinner', price: '$2.00', slug: 'gear-spinner', category: 'Fidget'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/catalog">
            Browse the Catalog
          </Link>
        </div>
      </div>
    </header>
  );
}

function PrintCard({name, price, slug, category}: typeof prints[number]) {
  return (
    <div className="col col--4" style={{marginBottom: '1.5rem'}}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{name}</Heading>
        </div>
        <div className="card__body">
          <p>
            <strong>{price}</strong> · {category}
          </p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={`/catalog/${slug}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0'}}>
          <div className="container">
            <div className="row">
              {prints.map((print) => (
                <PrintCard key={print.slug} {...print} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
