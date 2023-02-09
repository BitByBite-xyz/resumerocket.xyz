import { Text, Grid, Button, Spacer, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

export const AcmeLogo = () => (
  <svg
    className=""
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export default function Index() {
  const router = useRouter();
  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Text h2>
            Unlock your career potential with the perfect cover letter!
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text>
            <b style={{ fontSize: 25, marginRight: 5 }}>ResumeRocket</b> is the
            perfect solution to quickly create a winning cover letter that will
            help you stand out and land your dream job. With one simple click,
            ResumeRocket will generate a personalized and professional cover
            letter that is tailored to your unique job requirements. Easily
            customize the cover letter to your needs and stand out in the job
            market. ResumeRocket takes the hassle out of crafting a professional
            cover letter and ensures that you make the best possible impression
            with potential employers. Start building your dream career with
            ResumeRocket today
          </Text>
        </Grid>
        <Grid xs={12}>
          <Button onClick={() => router.push("/home")}>Get Started</Button>
        </Grid>
        <Spacer y={2} />
        <Grid xs={12}>
          <Text h2>Examples</Text>
        </Grid>
        <Grid xs={12}>
          <Card style={{ padding: "20px 40px 20px 40px" }} css={{ width: 800 }}>
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Dear Amazon, <br />
                <br />I am writing today in regards to the open Machine Learning
                Engineer position. Based on the job description and my research
                of Amazon, I believe that I would be a great fit for this role.
                My education and research experience have given me the skills
                necessary to excel in this position. I am currently a CIERA
                Post-Baccalaureate Fellow at Northwestern University, where I am
                researching and developing machine learning models that will
                increase detail of previous stellar evolution simulations. I
                have also built a biomedical image classifier ensemble using
                TensorFlow and an object detector in Pytorch. My experience with
                machine learning, as well as my experience with programming in
                Python, C, and C++, makes me confident that I would be an asset
                to the Amazon team. In addition to my technical skills, I also
                have excellent communication skills. I am a native English
                speaker, and I am also fluent in German and Brazilian
                Portuguese. I am confident that I can effectively communicate
                with people from all over the world, which would be an asset in
                a global company like Amazon. I believe that I have the skills
                and experience necessary to be a successful Machine Learning
                Engineer at Amazon. I am excited to learn and grow in this role,
                and I am confident that I can make a positive contribution to
                the team. Thank you for your time and consideration, and I look
                forward to hearing from you.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
