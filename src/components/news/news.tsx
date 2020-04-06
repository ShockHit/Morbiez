import React, { Component, ChangeEvent } from 'react';
import './news.css';
import ReactCardFlip from 'react-card-flip';


interface NewsState{
    isFlipped1:boolean;
    isFlipped2:boolean;
    isFlipped3:boolean;
    errors:{emailError:string,nameError:string}
}

export class News extends Component<any,NewsState>{
    constructor(props:any) {
        super(props);
          this.state = {
          isFlipped1: false,
          isFlipped2:false,
          isFlipped3:false,
          errors:{emailError: '*',nameError:'*'}
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
      }
      handleClick1() {
        this.setState(prevState => ({ isFlipped1: !prevState.isFlipped1 }));
      }
      handleClick2() {
        this.setState(prevState => ({ isFlipped2: !prevState.isFlipped2 }));
      }
      handleClick3() {
        this.setState(prevState => ({ isFlipped3: !prevState.isFlipped3 }));
      }
      setName = (args: ChangeEvent<HTMLInputElement>) =>{
        const name = args.target.value;
        let nameError = '';
        if(name === ''){
            nameError = 'Missing Name!'
        }
        if(name.length>2){
            nameError = 'Must Be a Real Name'
        }
        if(/\d/.test(name)){
            nameError = 'Name cannot contain numbers!'
        }
        const errors = {...this.state.errors}
        errors.nameError = nameError;
        this.setState({errors})
      }
      validateEmail = (email:any) =>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      setMail = (args: ChangeEvent<HTMLInputElement>) =>{
        const mail = args.target.value;
        let mailError = '';
        if(mail === ''){
            mailError = 'Mail is Missing!'
        }
        if(!this.validateEmail(mail)){
            mailError = 'Incorrect Mail Adress'
        }
        const errors = {...this.state.errors}
        errors.emailError = mailError;
        this.setState({errors})
      }
    
      private isNewsFormCorrect = () =>{
        return this.state.errors.emailError === ''
            && this.state.errors.nameError === '';
      }
  
    public render(){
        return(
            <div className='news'>
                <div className='flipCard'>
                    <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                    <div className='frontCard1'>
                        <h1>News</h1> 
                        <hr/>
                        <h5>Join our News letter to get the hottest burger related news!</h5>
                        <div className='cardGif'></div>
                        <button onClick={this.handleClick1}>Sign Up</button>
                    </div>
            
                    <div className='backCard1'> 
                        <h1>Join Now and start reciving cool burger news!</h1>
                        <div className ='formError'>{this.state.errors.emailError}</div>
                        <span>Email</span>
                        <input type='text' onChange={this.setMail}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className ='formError'>{this.state.errors.nameError}</div>
                        <span>Name</span>
                        <input type='text' onChange={this.setName}/>
                        <button onClick={() => this.isNewsFormCorrect() ? this.handleClick1() : alert('Must complete form')} >Submit</button>
                    </div>
                    </ReactCardFlip>
                </div>
{/* ----------------------------------------------------------------------------------- */}
                <div className='flipCard'>
                    <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                    <div  className='frontCard2'>
                        <h1>TakeAway!</h1>
                        <h5>New! order deliveries to entire Tel-Aviv</h5>
                        <hr/>
                        <div className='cardGif2'></div>
                    <button onClick={this.handleClick2}>Order Now!</button>
                    </div>
            
                    <div className='backCard2'>
                        This is the back of the card.
                        <button onClick={this.handleClick2}>Click to flip</button>
                    </div>
                    </ReactCardFlip>
                </div>
{/* ----------------------------------------------------------------------------------- */}
                <div className='flipCard'>
                    <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                    <div className='frontCard3'>
                        <h1>Reviews</h1>
                        <h5>See for yourself just how good our burger really are</h5>
                        <hr/>
                        <div className='cardGif3'></div>
                    <button onClick={this.handleClick3}>Click to flip</button>
                    </div>
            
                    <div className='backCard3'>
                    This is the back of the card.
                    <button onClick={this.handleClick3}>Click to flip</button>
                    </div>
                    </ReactCardFlip>
                </div>

            </div>
        )
    }

}