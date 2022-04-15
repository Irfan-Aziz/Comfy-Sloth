import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section page-section">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quam
            possimus sit? Cum suscipit quos, iste hic possimus impedit debitis
            exercitationem deserunt unde vero dolore, maiores vel ad illo
            maxime. Fugiat hic quidem ratione voluptatibus similique tempore eos
            tenetur, maxime vero nisi atque alias modi odit cum vitae dolor
            necessitatibus? Velit eaque quas omnis, placeat perspiciatis minus
            id vel quibusdam? Neque magni aliquid amet, nobis temporibus officia
            magnam, iste, doloribus iure quidem porro exercitationem
            perspiciatis deleniti voluptate autem aut cupiditate nisi ratione.
            Incidunt maxime amet numquam nisi molestias hic aut? Non quidem unde
            reiciendis repellendus. Voluptates, nobis possimus a reprehenderit
            ducimus nihil nam quis vero accusamus saepe officiis quos officia,
            maiores, recusandae fuga error dignissimos minus. Voluptatum quas ut
            voluptatem? Reprehenderit fugiat error a aspernatur accusantium,
            repudiandae illum eveniet, earum magni delectus officia assumenda
            reiciendis nesciunt tempore sapiente rem doloribus cumque quia
            tempora. Obcaecati similique libero est voluptatum unde quod! Nam
            dolor, molestias assumenda aperiam aspernatur ad, alias maxime ab
            ipsum quaerat officiis rerum distinctio! Soluta numquam maxime,
            dolorem illum autem architecto, harum odit, porro voluptatibus
            perspiciatis exercitationem debitis voluptates? Necessitatibus alias
            quia magni reprehenderit harum, cum eos voluptatibus dolorem porro
            non tempora, rerum dolores corporis accusantium. Ratione, at atque
            veniam tempore dolores iusto blanditiis, perferendis reprehenderit
            temporibus, deleniti sapiente? Dolorem ipsa beatae sapiente illo
            numquam doloremque officia aspernatur reiciendis, odio
            necessitatibus explicabo. Fuga culpa nam quibusdam reiciendis ex
            debitis exercitationem beatae, iusto, blanditiis asperiores possimus
            iste libero, porro recusandae! Asperiores ad architecto quaerat a
            dolorem optio! Deleniti ex dolorem id, corrupti accusantium sed
            obcaecati sit dignissimos non suscipit labore vero et minus officia
            placeat aperiam odio culpa aut sunt? Nulla, vel aut sit voluptatem
            maxime sint deleniti officiis! Ullam quas labore consectetur
            aspernatur corrupti neque quidem suscipit est alias a tenetur amet
            rerum cum nobis sapiente, officiis eos autem! Dolor distinctio
            possimus iure, aut dignissimos facere doloribus adipisci ea itaque
            corporis cum laboriosam officia vitae error deserunt porro, sit illo
            ab et cupiditate! Repudiandae molestias laboriosam ad reprehenderit
            iusto? Alias, dignissimos ullam iusto similique blanditiis iste eius
            ducimus excepturi quae, veritatis itaque culpa eaque ut
            perspiciatis? Perferendis eius cum fugiat iste illo, consequatur
            officia reiciendis, distinctio est eos dolores. Deserunt voluptate a
            libero quae ipsa at hic quia, reprehenderit inventore expedita.
            Dolorum nobis totam eaque architecto odit, iure doloremque assumenda
            non dolorem impedit rem enim vel iusto veniam. Ad? Aspernatur vero
            iste magni veniam a praesentium ratione nostrum totam quidem
            reprehenderit sunt nam similique sed enim rem sapiente cumque optio
            soluta quam exercitationem, temporibus ipsa! Nulla ipsam numquam
            hic! Maxime quibusdam magnam rerum, libero vel blanditiis quo dolor
            temporibus distinctio commodi tempora ab voluptas tempore pariatur
            neque quaerat molestiae corporis nostrum asperiores quia ratione
            laudantium autem dicta. Aliquid, iure. Praesentium voluptas
            explicabo fugiat quisquam dignissimos quibusdam quam, dolor
            provident. Deserunt eveniet expedita ad vitae quae qui pariatur.
            Sint quae recusandae dolorum consequatur distinctio voluptatem
            quibusdam saepe quas. Accusamus, fuga. Sequi atque, eos, adipisci
            labore architecto aspernatur dolores quibusdam repudiandae
            temporibus velit expedita dicta corrupti accusamus ut non
            repellendus dolorem sed hic iure voluptates. Qui adipisci illum
            delectus ex dolor? Eum distinctio reprehenderit necessitatibus fugit
            in, officiis aliquam omnis odio nihil qui ea doloribus beatae minima
            nobis sit culpa quam fuga saepe aut, perspiciatis, et nostrum sed
            iste? A, laborum. Aliquid nam deleniti exercitationem, eaque
            laudantium laboriosam similique fugiat consectetur totam molestias,
            vitae itaque sapiente accusamus aliquam. Eaque ducimus consequuntur
            assumenda sunt error laudantium saepe magni totam explicabo.
            Similique, eius. Fuga suscipit architecto earum necessitatibus
            delectus libero recusandae obcaecati? Maiores, molestias?
            Reprehenderit aliquid doloribus dolore esse ex maxime modi, beatae
            eveniet natus iste, nulla facilis sequi. Tempore excepturi
            voluptatem illo.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
