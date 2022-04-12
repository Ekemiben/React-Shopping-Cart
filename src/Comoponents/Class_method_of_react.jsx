
// Class Component

class Car extends React.Componenet {
    sonstructor(){
        super();
        this.props = {color:"red"}
    }
    render(){
        return <h3> I am{this.props.color} a Car! </h3>
    }
}

// export defualt Carname;