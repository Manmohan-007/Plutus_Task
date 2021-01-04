import Axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import classes from "./Home.module.css"
import AppContext from "../../Context/application/Context"
export default function Home() {
    const appContext = useContext(AppContext);
    const [Userdata, setUserData] = useState([])
    const [InputData, setInputData] = useState({ email: "", firstname: "", lastname: "" })
    useEffect(() => {
        Axios
            .get("https://reqres.in/api/users?page=1")
            .then((resp) => {
                setUserData([...resp.data.data])
            })
            .catch((err) => {
                if (err.status === 400) {
                    alert(err.response.data.description)
                }
            });
    }, [])

    const handleDeleteClick = (id) => {

        let proceed = window.confirm("Are u sure you want to delete ??");
        if (proceed) {
            const newArr = Userdata.filter(item => {
                return item.id !== id
            })
            setUserData([...newArr])
        }
        else {

        }

    }

    const handleUpdateClick = (item) => {
        setInputData({ id: item.id, email: item.email, firstname: item.first_name, lastname: item.last_name })
    }
    const handleInputChange = (e) => {
        const { value, name } = e.target;
        if (name === "email") {
            setInputData({ ...InputData, email: value })
        }
        else if (name === "firstname") {
            setInputData({ ...InputData, firstname: value })
        }
        else if (name === "lastname") {
            setInputData({ ...InputData, lastname: value })
        }
    }
    const updatebtnClickhandler = () => {
        let index;
        const id = InputData.id;
        const temp = Userdata.map((item) => {
            if (item.id === id) {
                index = item.id
                item.email = InputData.email
                item.first_name = InputData.firstname
                item.last_name = InputData.lastname
            }
            return item

        })
        Axios.put(`https://reqres.in/api/users/${index}`, {
            email: InputData.email, first_name: InputData.firstname, last_name: InputData.lastname
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res)
                    alert("successfully updated")
                }

            })
        setUserData([...temp])
        setInputData({ email: "", firstname: "", lastname: "" })
    }
    const addUserhandler = () => {
        if (InputData.email.length !== 0 && InputData.firstname.length !== 0 && InputData.lastname.length !== 0) {
            const temp = [...Userdata];
            const dataObj = {
                id: temp.length + 1, email: InputData.email, first_name: InputData.firstname, last_name: InputData.lastname
            }
            temp.push(dataObj)
            setUserData([...temp])
        }
        else {
            alert("Fields cant be empty")
        }
    }
    const RenderedUser = Userdata.map((item, pos) => {
        return (
            <div className={classes.MainWrapper} key={item.id}>
                <div className={classes.ImageWrapper}>
                    <img src={item.avatar}>
                    </img></div>
                <div>{item.email}</div>
                <div>{item.first_name}</div>
                <div>{item.last_name}</div>
                <div onClick={() => handleUpdateClick(item)}><EditIcon /> </div>
                <div onClick={() => handleDeleteClick(item.id)}><DeleteIcon /> </div>
            </div>
        )
    })
    const logoutClickhandler = () => {
        appContext.storeAuthenticatedUser(null);
    }
    return (
        <div>
            <div className={classes.InputDataWrapper}>
                <p>Email</p>
                <input onChange={handleInputChange} name="email" value={InputData.email} type="email" />
                <p>Firstname</p>
                <input onChange={handleInputChange} name="firstname" type="text" value={InputData.firstname} />
                <p>LastName</p>
                <input onChange={handleInputChange} name="lastname" type="text" value={InputData.lastname} />
                <button onClick={addUserhandler}>Add user</button>
                <button onClick={updatebtnClickhandler}>Update user</button>
                <button onClick={logoutClickhandler} className={classes.logoutBtn}>Logout</button>
            </div>
            {RenderedUser}
        </div>
    )
}
