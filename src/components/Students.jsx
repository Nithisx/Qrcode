
import PropTypes from "prop-types"
export const Students = (props) => {
  return (
    <div className="student">
        <table>
            
            <tbody>

                <tr>
                    <th>name</th>
                    <td>{props.name}</td>
                </tr>

                <tr>
                    
                    <th>rollno</th>
                    <td>{props.age}</td>
                </tr>

                <tr>
                    <th>is married</th>
                    <td>{ props.ismarried?"yes":"no"}</td>
                </tr>
            

            
            
            </tbody>
            
             
        </table>
    </div>
  )
}

Students.propTypes ={
    name:PropTypes.string,
    age:PropTypes.number,
    ismarried:PropTypes.bool,
};

Students.defaultProps={

    name: "defult",
    age: 15,
    ismarried:true,
};
