import React, {useState,useEffect} from 'react'
import {Button, Icon,Input,Modal} from 'semantic-ui-react';
import axios from 'axios'
import {useDispatch,useSelector} from "react-redux"
import {actions} from '../../../features/reduxData'



export default function SearchCourses() {
        const APIurl = "https://jsonbox.io/RP_DD_Coders_Student_Portal1"
        const assigContent =  [{ assigName: '', description: '', deadline: '' }]
        const [input, setInput] = useState('')
        const [modalInput, setModalInput] = useState('')
        const [modalState, setModalState] = useState(false)
        //const [testArr, setTestArr] = useState([])
        const [change, setchange] = useState(false)
        const dispatch = useDispatch()
        const testArr = useSelector(state=>state.courses.courses)

        useEffect(() => {
            setchange(false)
            console.log('currentArr', testArr)
            getList(APIurl, dispatch,setchange)


        }, [change])


        const courseNames = testArr
        .filter(
            (e) =>
              e.courseName.toLowerCase().match(input.toLowerCase())
          ).map((e) => {
            return <div key={e._id} onClick={()=>chooseCourse(e)}>
               {e.courseName} <button onClick={()=> del(e._id,setchange,dispatch,testArr)}>Delete</button>
                </div>
        });

        function chooseCourse(el){
            console.log(el.assignments)
            dispatch(actions.currentCourse(el))

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
                <Button onClick={()=>modalAction(APIurl,modalInput,assigContent,setModalState,setchange,dispatch,testArr)} inverted color='green' className="confirmBtn"><Icon  name="checkmark"/>Add</Button>
                <Button onClick={()=>setModalState(false)} className="cancelBtn"><Icon name="cancel"/>Cancel</Button>

            </div>

        </Modal.Content>
    </Modal>



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

let temp = []
function getList(url,dispatch,setchange){

    axios.get(url)
    .then((res)=>{
        console.log(res)
        temp.push(...res.data)

        if(res.data.length !== 0){
            dispatch(actions.addCourses([...temp]))


        }
        temp = []
    })
    .catch(err => console.log('ERROR1 --->',err))
}

function modalAction(APIurl,modalInput,assigContent,setModalState,setchange,dispatch,testArr){

    console.log('here!')
    if(modalInput !== ''){
        axios.post(APIurl,{courseName:modalInput, assignments:assigContent})
    .then(res => {
        console.log(res)
        setchange(true)
        let temp = testArr;
        temp.push({courseName:modalInput, assignments:assigContent})

        dispatch(actions.addCourses(temp))

    })
    .catch(err => console.log('ERROR --->',err))
    }
    setModalState(false)
}

function del(id,setchange,testArr,dispatch){

    axios.delete("https://jsonbox.io/RP_DD_Coders_Student_Portal1/" + id)
  .then(response => {
    console.log(response)
    setchange(true)
    let temp = testArr;
        temp.pop()

        dispatch(actions.addCourses(temp))
  })
  .catch(e => console.log(e))

}