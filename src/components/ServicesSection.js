import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServiceSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Front-end Developer"
            desc="I'm Developer with a keen interest in Web Development and also have a hands-on experience in HTML, CSS, JAVASCRIPT, REACT."
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Graphic designer"
            desc="I do all lot of Graphic design stuffs like Video Editing and Illustrations as a Hobby."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Management"
            desc="I'm good in Communication and Interpersonal skills and also has a lot of knowlege about businesses while will help to grow your Business. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
