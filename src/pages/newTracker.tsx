import { Formik } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layouts';
import { ADD_TRACK } from '../reducers/tracks';
import Action from '../types/Action';
import GlobalState from '../types/GlobalState';
import Track from '../types/Track';
import { navigate } from 'gatsby';
import {
  Button,
  Select,
  Input,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@material-ui/core';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

class NewTracker extends React.Component<IndexPageProps, {}> {
  render() {
    const { dispatch } = this.props;
    return (
      <DefaultLayout location={this.props.location}>
        <Formik
          onSubmit={(values) => {
            dispatch({ type: ADD_TRACK, payload: values });
            navigate('/');
          }}
          initialValues={{ name: '', frequency: 'DAILY', color: colors[0] }}
          validate={(values) => {
            let errors: ErrorObject = {};
            if (!values.name) {
              errors.name = 'Name Required';
            }
            return errors;
          }}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <Row>
                <Col md={4} style={{ marginBottom: '4rem' }}>
                  <FormControl error={errors.name && touched.name} fullWidth>
                    <InputLabel>Name</InputLabel>
                    <Input
                      style={{ fontSize: '2rem' }}
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <FormHelperText>{errors.name}</FormHelperText>
                    )}
                  </FormControl>
                </Col>
                <Col md={4} style={{ marginBottom: '4rem' }}>
                  <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                      style={{ fontSize: '2rem' }}
                      native
                      name="frequency"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.frequency}
                    >
                      {options.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                <Col md={4} style={{ marginBottom: '4rem' }}>
                  <FormControl fullWidth>
                    <InputLabel>Color</InputLabel>
                    <Select
                      style={{ fontSize: '2rem' }}
                      native
                      name="color"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.color}
                    >
                      {colors.map((color) => (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '-1rem',
                  }}
                >
                  <Button
                    type="button"
                    onClick={() => navigate('/')}
                    size="large"
                    style={{ margin: '1rem', fontSize: '1.5rem' }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isValid}
                    onClick={() => handleSubmit()}
                    size="large"
                    style={{ margin: '1rem', fontSize: '1.5rem' }}
                  >
                    Save
                  </Button>
                </div>
              </Row>
            </>
          )}
        </Formik>
      </DefaultLayout>
    );
  }
}

export default connect()(NewTracker);

/** Non-component code */

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: any;
  dispatch: (action: Action) => void;
  tracks: [Track?];
}

interface ErrorObject {
  name?: string;
}

const options = [
  {
    value: 'DAILY',
    label: 'Daily',
  },
  {
    value: 'WEEKLY',
    label: 'Weekly',
  },
  {
    value: 'MONTHLY',
    label: 'Monthly',
  },
];

const colors = ['#88AB75', '#2D93AD', '#D0A98F', '#E26D5A', '#F00699'];

const StyledButton = styled(Button)`
  font-size: 1.5rem;
`;
