import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TodayOP() {
    const labData = [
        {"PatientName": "Korian Lalu", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Bons", "Age": 50, "Gender": "Male", AssigneDoctor: "Nirio" },
        {"PatientName": "Nola Rab", "Address": "Batrahalli", "Date": "7-7-2023", "Problem":"Leg pain", "Age": 45, "Gender": "Male", AssigneDoctor: "Nirio" },
        {"PatientName": "Varan Kaloi", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Hand facture", "Age": 46, "Gender": "Male", AssigneDoctor: "Molwell" },
        {"PatientName": "Thonu Mal", "Address": "Batrahalli", "Date": "7-7-2023", "Problem":"Fever", "Age": 34, "Gender": "Male", AssigneDoctor: "Looper" },
        {"PatientName": "Kareon", "Address": "Ayyappa nagar", "Date": "7-7-2023", "Problem":"Surgery", "Age": 45, "Gender": "Male", AssigneDoctor: "Nirio" },
        {"PatientName": "Leelu Sa", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Fever", "Age": 45, "Gender": "Male", AssigneDoctor: "Nirio" },
        {"PatientName": "Sanee Var", "Address": "Ayyappa nagar", "Date": "7-7-2023", "Problem":"Fever", "Age": 47, "Gender": "Male", AssigneDoctor: "Looper" },
        {"PatientName": "Shivakar", "Address": "Maratha halli", "Date": "7-7-2023", "Problem":"General", "Age": 35, "Gender": "Male", AssigneDoctor: "Nirio" },
        {"PatientName": "Vanikar Lalu", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Surgery", "Age": 45, "Gender": "Male", AssigneDoctor: "Molwell" },
        {"PatientName": "Komaram Rai", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Suirgery", "Age": 25, "Gender": "Male", AssigneDoctor: "Nirio" },
        {"PatientName": "Seetha kal", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Leg pain", "Age": 58, "Gender": "Male", AssigneDoctor: "Looper" },
        {"PatientName": "Varun Maraj", "Address": "KR Pura", "Date": "7-7-2023", "Problem":"Leg pain", "Age": 35, "Gender": "Male", AssigneDoctor: "Nirio" }    
    ]
    const headers = Object.keys(labData[0]);
    const [selectedP, setSelectedP] = useState("");
    const [show, setShow] = useState(false);
    const [editOp, setEditOp] = useState(false);
    const [patientData, setPatientData] = useState();

    const handleClose = () => {
        setShow(false);
        setEditOp(false);
    }
    const handleShow = () => setShow(true);
    console.log("HHHHHH",new Date());
    const doctorList = ["Sudharshan", "Shanthan", "Carwell", "Jodus", "MoranCal"]
    useEffect(()=> {
    }, [])
    const openOP = () => {
        handleShow();
    }
    const nameChange =(e)=> {
        console.log("change", e.target.value);
    }
    const selectDoctpor = (e) => {
console.log("uiuji",e.target.value);
    }
    const setGender = (e, gender) => {
        console.log("setGender", gender);
    }
    const saveOP = () => {

    }
    const editOP = (e, op) => {
        console.log("op", op);
        setPatientData(op);
        setEditOp(true);
        openOP();

    }

    const opModal = (data) => {
        return <>
         <div className='op_form'>
                <Form.Control type="text" value={editOp ? data.PatientName: ''} onChange={(e)=>nameChange(e)} placeholder="Name" />
            </div>
            <div className='op_form'>
            <Form.Control type="text" value={editOp ? data.Age: ''} onChange={(e)=>nameChange(e)} placeholder="Age" />
            </div>
            <div className='op_form'>
            <Form.Control type="text" value={editOp ? data.Address: ''} onChange={(e)=>nameChange(e)} placeholder="Address" />
            </div>
            <div className='op_form'>
            <Form.Control type="text" value={editOp ? data.PatientName: ''} onChange={(e)=>nameChange(e)} placeholder="Problem" />
            </div>
            <div className='op_form'>
            <Form.Select onChange={(e)=>selectDoctpor(e)}aria-label="Default select example">
                <option>Select Docter</option>
                {doctorList.map((it)=>(<option value={it}>{it}</option>))}
            </Form.Select>
        </div>
        <div className='op_form'>
        <Form.Check
            inline
            label="Male"
            name="group1"
            type={'radio'}
            id={`Male`}
            onChange={(e)=>setGender(e, "Male")}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={'radio'}
            id={`Female`}
            onChange={(e)=>setGender(e, "Female")}
          />
          <Form.Check
            inline
            label="Trans"
            name="group1"
            type={'radio'}
            id={`Female`}
            onChange={(e)=>setGender(e, "Trans")}
          />
        </div>
        <div className='op_form'>
        <Form.Check
            inline
            label="Urin"
            name="group2"
            type={'checkbox'}
            id={`Urin`}
            onChange={(e)=>selectTest(e, 'Urin')}
          />
          <Form.Check
            inline
            label="Blood"
            name="group2"
            type={'checkbox'}
            id={`Blood`}
            onChange={(e)=>selectTest(e, 'Blood')}
          />
          <Form.Check
            inline
            label="Scan"
            name="group2"
            type={'checkbox'}
            id={`Scan`}
            onChange={(e)=>selectTest(e, 'Scan')}
          />
        </div>
        <div className='op_form'>
            <Button value={'info'} onClick={()=>saveOP()}>Save OP</Button>
        </div>
        </>
    }
  return (
    <div>
        <Button variant="primary" onClick={openOP}>Create OP</Button>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>S No</th>
            {headers.map((item)=> (<th>{item}</th>))}
            <th>Edit Data</th>
          </tr>
        </thead>
        <tbody>
        {labData.map((item, index)=>(
                     <tr>
                        <td>{index}</td>
                     <td>{item.PatientName}</td>
                     <td>{item.Address}</td>
                     <td>{item.Date}</td>
                     <td>{item.Problem}</td>
                     <td>{item.Age}</td>
                     <td>{item.Gender}</td>
                     <td>{item.AssigneDoctor}</td>
                     <td><Button onClick={(e)=>editOP(e, item)}>Edit</Button></td>
                   </tr>
        ))}
    
            </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Patient Details
          </Modal.Title>
          <span style={{marginLeft: '20px'}}>{new Date().toLocaleString()}</span>
        </Modal.Header>
        <Modal.Body>
        {editOp? opModal(patientData) : opModal ()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodayOP;