import { Text, Grid, Spacer, Card } from "@nextui-org/react";

export default function Examples() {
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
                Dear Hiring Manager,
                <br />
                <br />I am writing to apply for the Software Engineer position
                at Amazon. As a current student of Computer Science at the
                University of Marquette, I have had the opportunity to gain a
                comprehensive understanding of programming languages and
                software development. I have taken courses in Object-Oriented
                Programming I, Data Structures, Hardware Systems, and
                Algorithms, which have enabled me to develop the key skills
                necessary for a successful software engineer.
                <br />
                <br />
                In addition, I have gained experience working with a variety of
                technologies, such as Java, JavaScript, React, React Native,
                HTML, CSS, Sketch, C, Python, PHP, SQL, Adobe Photoshop, and
                Adobe Illustrator. I have also had the opportunity to lead a
                team of developers and am familiar with the process of creating
                mobile and web applications, as well as websites. I am confident
                that my skills, experience, and knowledge will be an asset to
                your team.
                <br />
                <br />
                Most recently, I have been working as a Data Analytics Intern at
                Caterpillar, where I have identified and implemented fixes to
                the codebase, migrated old tests in the codebase to a newer
                testing library, refactored old tests, and implemented business
                features. Additionally, I have been the co-founder and Chief
                Technology Officer at BitByBite Inc. since 2015, where I have
                helped develop several applications in JavaScript, worked with
                clients to create and outline the user interface of their
                application using Sketch, and reviewed and edited the work of
                other programmers.
                <br />
                <br />
                I am thrilled at the prospect of joining your team and
                contributing to the success of Amazon. I am confident that my
                skills and experience make me an ideal candidate for the
                position. I look forward to speaking with you further about this
                opportunity.
                <br />
                <br />
                Thank you for your time and consideration.
                <br />
                <br />
                Sincerely,
                <br />
                John Doe
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Spacer y={2} />
        <Grid xs={12}>
          <Text h3>Software Engineering Position at Caterpillar</Text>
        </Grid>
        <Grid xs={12}></Grid>
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
        <Spacer y={2} />
        <Grid xs={12}>
          <Text h3>Data Analyst Positon at Google</Text>
        </Grid>
        <Grid xs={12}></Grid>
        <Grid xs={12}>
          <Card style={{ padding: "20px 40px 20px 40px" }} css={{ width: 800 }}>
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Dear Google Recruiting Team,
                <br />
                <br />I am writing to express my interest in the Data Analyst
                role at Google. I believe my academic background and
                professional experience make me an ideal candidate for the
                position.
                <br />
                <br />I recently completed my Master of Science in Computer
                Science from Carnegie Mellon University, where I had the
                opportunity to take courses such as Introduction to Machine
                Learning (10-601, Fall 2014) and Machine Learning with Large
                Datasets (10-605, Spring 2015). I also have significant
                experience in programming/scripting languages such as Java,
                Python, C, SQL, Javascript, MATLAB, and Perl as well as
                frameworks and tools such as Hadoop, Django, DKPro for NLP,
                Maven, and Git.
                <br />
                <br />I have also had the opportunity to gain professional
                experience while working with Yahoo!, the Ubiquitous Knowledge
                Processing Lab at TU Darmstadt, the Computer Engineering and
                Networks Laboratory at ETH Zurich, and National Resource for
                Network Biology, where I developed applications in Java and
                Python, and built an app for Cytoscape, an open-source software
                for complex network visualization.
                <br />
                <br />I have also been involved in several projects, such as
                implementing a Hadoop-like MapReduce facility with master and
                worker nodes for map-reduce operations over large datasets,
                recognizing objects using the CIFAR-10 dataset, and devising a
                priority-based auctioning algorithm for task allocation in a
                multi-agent environment.
                <br />
                <br />I am confident that my knowledge and experience in data
                analysis, software engineering, and programming would be an
                asset to Google. I look forward to discussing my qualifications
                with you in more detail.
                <br />
                <br />
                Sincerely, <br />
                Mack Crol
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
