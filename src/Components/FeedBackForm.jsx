import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../utils/Responsive";
import Colors from "../utils/Colors";
import { Rating } from "@smastrom/react-rating";
import { app } from "../utils/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { ReviewContext } from "../Context/ReviewContext";
import { Fade, Slide } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  ${tablet({ padding: "30px 0px" })}
  width: 100%;
  flex-direction: column;
`;

const ContentBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  ${mobile({ width: "100%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
  margin-top: 30px;
`;

const SlideBox = styled(Slide)`
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  ${mobile({ width: "100%" })}
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  ${tablet({ fontSize: "14px" })}
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid grey;
  outline: none;
  font-size: 22px;
  padding: 10px 0;
  ${tablet({ fontSize: "14px" })}
`;

const TextArea = styled.textarea`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid grey;
  outline: none;
  font-size: 22px;
  ${tablet({ fontSize: "14px" })}
`;

const ButtonDiv = styled.button`
  background-color: #fb6f92;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.3s linear;
`;

const FeedBackForm = () => {
  const [fullname, setFullName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  const { testiMonials, setTestiMonils } = useContext(ReviewContext);

  const getAllTestiMonials = async () => {
    const querySnapshot = await getDocs(collection(db, "customer-reviews"));
    const testimonialsArray = [];
    querySnapshot.forEach((doc) => {
      testimonialsArray.push(doc.data());
    });
    setTestiMonils(testimonialsArray);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const request = {
      fullname,
      feedback,
      rating: rating === 0 ? 1 : rating,
    };

    try {
      await setDoc(doc(db, "customer-reviews", fullname), request);
      setFullName("");
      setFeedback("");
      setRating(0);
      getAllTestiMonials();
    } catch (error) {
      console.error("Error writing document: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTestiMonials();
  }, []);

  return (
    <Container>
      <ContentBox>
        <Fade>
          <h1 style={{ marginBottom: "15px" }}>
            Share your <span style={{ color: Colors.PRIMARY }}>Feedback</span>
          </h1>
        </Fade>

        <SlideBox direction="right">
          <Form onSubmit={handleSubmit}>
            <InputDiv>
              <Label>Full Name</Label>
              <Input
                type="text"
                value={fullname}
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </InputDiv>

            <InputDiv>
              <Label>Feedback/Review</Label>
              <TextArea
                rows={5}
                minLength={50}
                maxLength={360}
                value={feedback}
                placeholder="Your Review"
                onChange={(e) => setFeedback(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <Label>Rating:</Label>
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                required
              />
            </InputDiv>
            <InputDiv>
              <ButtonDiv type="submit">
                {loading ? "Loading..." : "Submit"}
              </ButtonDiv>
            </InputDiv>
          </Form>
        </SlideBox>
      </ContentBox>
    </Container>
  );
};

export default FeedBackForm;
