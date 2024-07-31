

export const Arraysamples = (props) => {
   const {items} =props;
  return (
    <div>
        
        <h2>list</h2>
         
        <ul>
            {items.map((item) => (
                <li key={item.id}  > {item.name}</li>
            ))}
        </ul>

    </div>
    
    
  );
};
