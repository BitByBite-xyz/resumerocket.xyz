import { Text, Grid, Button, Spacer, Card, Navbar } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Examples() {
  const router = useRouter();
  return (
    <>
      <Grid.Container>
        <Grid xs={12}>
          <Text h2>Examples</Text>
        </Grid>
        <Spacer y={1} />
        <Grid xs={12}>
          <Text h3>Software Engineering Positon at Amazon</Text>
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
        <Spacer y={2} />
        <Grid xs={12}>
          <Text h3>Software Engineering Positon at Amazon</Text>
        </Grid>
        <Grid xs={12}></Grid>
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
