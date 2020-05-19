import React, {useState,useEffect} from 'react'
import {Button, Icon,Input,Modal} from 'semantic-ui-react';
import axios from 'axios'

const temp = []
export default function SearchCourses() {
        const APIurl = "https://jsonbox.io/RP_DD_Coders_Student_Portal"
        const assigContent =  [{ assigName: '', description: '', deadline: '' }]
        const [input, setInput] = useState('')
        const [modalInput, setModalInput] = useState('')
        const [modalState, setModalState] = useState(false)
        const [testArr, setTestArr] = useState([])
        
        useEffect(() => {
            console.log('currentArr', testArr)
            
                axios.get(APIurl)
                .then((res)=>{
                    console.log(res)
                    temp.push(...res.data)
                    setTestArr([...temp])
                })
                .catch(err => console.log('ERROR --->',err))
                console.log(testArr)
            
           
        }, [])
        

    
    // .filter(
    //     (e) =>
    //       e.courseName.toLowerCase().match(input.toLowerCase())
    //   )
    const courseNames = testArr.map((e) => {
        return <div key={e._id}>{e.courseName} <button onClick={()=> del(e._id)}>Delete</button></div>
    });
    function del(id){
        axios.delete("https://jsonbox.io/RP_DD_Coders_Student_Portal/" + id)
      .then(response => {
        console.log(response)
        
      })
      .catch(e => console.log(e))
    }
    const addNewCourseBtn =
    <Button onClick={()=>setModalState(true)} color='blue' className="coursesAddBtn"  >
                <Icon  name="add"/>
                Add new Course
            </Button>
    const addCourseModal = 
    <Modal
        trigger={addNewCourseBtn}
        centered={false}
        open={modalState}
        onClose={()=>setModalState(false)}

        >
        <Modal.Header>New Course:</Modal.Header>
        <Modal.Content>
            <div className="title">
                <h5>Title:</h5>
                <Input className="input-title"
                        transparent
                        value={modalInput}
                        onChange={(e) => setModalInput(e.target.value)}
                    />
            </div>
            <div className="Desctiption">
                <h5>Description:</h5>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
            </div>
            <div className="button-group">
                <Button onClick={modalAction} inverted color='green' className="confirmBtn"><Icon  name="checkmark"/>Add</Button>
                <Button onClick={modalAction} className="cancelBtn"><Icon name="cancel"/>Cancel</Button>
            </div>

    </Modal.Content>
</Modal>

function modalAction(){
    setModalState(false)
    console.log('here!')
    if(modalInput !== ''){
        axios.post(APIurl,{courseName:modalInput, assignments:assigContent})
    .then(res => console.log(res))
    .catch(err => console.log('ERROR --->',err))
    }
    
}

    return (
        <div className='search-student-container'>
            <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search Courses...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="student-list-container">
                {courseNames}
              </div>
              {addCourseModal}
        </div>

    )

}
