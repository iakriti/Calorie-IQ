import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer fluid className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "#E8C5E5"}}>
      <MDBRow className='w-100'>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="ms-5 p-3 display-3 fw-bold ls-tight px-5" style={{ color: "#F7F9F2"}}>
            Calorie IQ:<br />
            <span className=" text-primary" >Smart Nutrition for a Healthier You</span>
          </h1>
          <p className='px-5 ms-5' style={{color: "#402E7A"}}>
            Introducing <strong>Calorie IQ</strong>, your personalized nutrition tracker. Effortlessly track your calories, tailor your intake, and achieve your health goals with personalized insights. Transform your diet with Calorie IQ!
          </p>
        </MDBCol>
        <MDBCol md='6' className='d-flex justify-content-center align-items-center'>
          <MDBCard className='w-100  shadow-lg' style={{ maxWidth: '500px' }}>
            <MDBCardBody className='p-5'>
              <h2 className='mb-4 text-center' style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#402E7A' , fontFamily: 'inherit' }}>Login</h2>
              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'/>
              <MDBBtn className='w-100 mb-4' size='md'>Login</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
