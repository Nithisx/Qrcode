import { useState} from 'react'

export const Refrm = () => {

    const [user,setuser]=useState({
        name:"kuppa",
        age:25,
        gender:"male",
        ismarried:true,
    });
  return (
    
    <>
        <table>

<tbody>
    <tr>
        <td>name</td>
        <td>{user.name}</td>
    </tr>
    <tr>
        <td>age</td>
        <td>{user.age}</td>
    </tr>
    <tr>
        <td>gender</td>
        <td>{user.gender}</td>
    </tr>
    <tr>
        <td>marriedstatus</td>
        <td>{user.ismarried?"yes":"no"}</td>
    </tr>
</tbody>
</table>

        <input type="text" placeholder='fullname' />
        <input type="text" placeholder='agr' />
        <div className="gender">
            <label htmlFor="male">
                <input type="radio" name='gender' id='male' /> male
            </label>
            <label htmlFor="female">
                <input type="radio" name='gender' id='female' /> female
            </label>
            <input type="checkbox" id='ismarried' /> is married
        </div>
    </>


  )
}
