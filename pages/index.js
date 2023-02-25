import { Text, Grid, Button, Spacer, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

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
          <Button onPress={() => router.push("/home")}>Get Started</Button>
        </Grid>
        <Spacer y={2} />
        <Grid xs={12}>
          <Text h2>Examples</Text>
        </Grid>
        <Grid xs={12}>
          <Card style={{ padding: "20px 40px 20px 40px" }} css={{ width: 800 }}>
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Dear Hiring Manager, <br />
                <br />I am writing to apply for the Software Engineer position
                at Caterpillar. With a Bachelor of Science in Computer Science
                from Denison University and a passion for building innovative
                software solutions, I believe I have the necessary skills and
                enthusiasm to make a positive contribution to your team.
                <br />
                <br />
                Throughout my academic career, I have developed a diverse set of
                skills through technical courses such as Applied Statistics,
                Computer Systems, Data Structures, Data Systems, Software
                Engineering, Computer Networking, Algorithm Analysis and Design,
                Operating Systems, Artificial Intelligence, and Advanced
                Algorithms. I am proficient in programming languages such as
                Python, C, C++, Git, LATEX, PyTorch, TensorFlow, Pandas,
                Matplotlib, and NumPy. Additionally, I am fluent in English,
                German, and Brasilian Portuguese.
                <br />
                <br />I have experience in both research and development of
                machine learning models. As a CIERA Post-Baccalaureate Fellow at
                Northwestern University, I researched and developed machine
                learning models that increased the detail of previous stellar
                evolution simulations. In addition, I created image
                classification and object detection preprocessing pipelines,
                built a biomedical image classifier ensemble using TensorFlow
                and an object detector in Pytorch, and implemented various
                evaluation metrics for both classification and object detection
                problems.
                <br />
                <br />
                I am also an experienced project manager and have led a
                successful project, Lokel, that connects college students with
                events hosted by small businesses, their peers, and campus
                organizations. My team won a school pitch competition at Denison
                University and I personally led a small team of business and
                sales oriented people to acquire 10% of Denison’s student body
                as users two weeks after launch.
                <br />
                <br />
                I am confident that my professional experience and technical
                skills make me an ideal candidate for the Software Engineer
                position at Caterpillar. I would be delighted to discuss the
                position and my qualifications further in an interview. Thank
                you for your time and consideration.
                <br />
                <br />
                Sincerely,
                <br />
                Daniel Smith
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
