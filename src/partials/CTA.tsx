import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          {/* Subscribe to my <GradientText>Newsletters</GradientText> */}
        </>
      }
      description=""
    />
  </Section>
);

export { CTA };
