/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Collapse from 'react-bootstrap/Collapse';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Pagination from 'react-bootstrap/Pagination';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Jumbotron({ children }) {
  return <div className="jumbotron">{children}</div>;
}

function Checkbox(props) {
  return <Form.Check type="checkbox" {...props} />;
}

function Label(props) {
  return <Form.Label {...props} />;
}

function Well({ children }) {
  return <div className="well">{children}</div>;
}

const MenuItem = Dropdown.Item;
const ControlLabel = Form.Label;
const HelpBlock = Form.Text;

export {
  Col,
  Row,
  Button,
  DropdownButton,
  ButtonGroup,
  ButtonToolbar,
  Table,
  Form,
  Alert,
  Image,
  Modal,
  Accordion,
  Jumbotron,
  Nav,
  Navbar,
  NavItem,
  FormControl,
  FormGroup,
  InputGroup,
  Popover,
  OverlayTrigger,
  ProgressBar,
  MenuItem,
  Collapse,
  Tabs,
  Tab,
  Label,
  ListGroup,
  ListGroupItem,
  Pagination,
  Well,
  Tooltip,
  HelpBlock,
  Checkbox,
  ControlLabel,
  Overlay,
  SplitButton
};
