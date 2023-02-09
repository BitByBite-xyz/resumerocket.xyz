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
          <Text h3>IT Manager Positon at Google</Text>
        </Grid>
        <Grid xs={12}></Grid>
        <Grid xs={12}>
          <Card style={{ padding: "20px 40px 20px 40px" }} css={{ width: 800 }}>
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Dear Google IT Manager,
                <br />
                <br />I am writing to apply for the IT Manager position at
                Google. With my extensive experience in software engineering and
                computer science, I believe I am the perfect fit for this role.
                I have a Master of Science in Computer Science from Carnegie
                Mellon University and a Bachelor of Engineering (Hons) in
                Computer Science from Birla Institute of Technology and Science.
                I am proficient in Java and have familiarity with Python, C,
                SQL, JavaScript, MATLAB, and Perl. I am also experienced in
                working with frameworks and tools such as Hadoop, Django, DKPro
                for NLP, Maven, and Git. During my internship at Yahoo!, I
                worked with the user data team and was able to develop a deep
                understanding of cloud services. I also interned at Ubiquitous
                Knowledge Processing Lab at TU Darmstadt, Germany where I
                developed an application using the DKPro library to
                automatically solve multiple choice reading comprehension
                questions. I have also worked on several projects. I implemented
                a Hadoop-like MapReduce facility, with master and worker nodes
                for map-reduce operations over large datasets, with a
                distributed file system, and fault tolerance to address data
                node failures. I also used GIST descriptors and a Kernelized
                (RBF) SVM to train a model using 4000 images for the CIFAR-10
                dataset and obtained a test accuracy of 61%. Additionally, I
                developed a priority-based auctioning algorithm for task
                allocation in a multi-agent environment. I am confident that my
                experience and qualifications make me an ideal candidate for the
                IT Manager position at Google. I look forward to discussing my
                qualifications further and I am excited to hear more about this
                opportunity. <br />
                <br />
                Sincerely, Mack Crol
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
