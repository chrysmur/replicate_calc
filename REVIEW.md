# Review Danstan
## Reuse Components

The `div` with buttons is repeated, you can reuse that.
```html
          <div className='panel'>
                <div>
                    <Button name="AC" clickHandler={this.handleClick}/>
                    <Button name="-/+" clickHandler={this.handleClick}/>
                    <Button name="Del" clickHandler={this.handleClick}/>
                    <Button name='+' clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick}/>
                    <Button name="8" clickHandler={this.handleClick}/>
                    <Button name="9" clickHandler={this.handleClick}/>
                    <Button name='-' clickHandler={this.handleClick} />

                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick}/>
                    <Button name="5" clickHandler={this.handleClick}/>
                    <Button name="6" clickHandler={this.handleClick}/>
                    <Button name='x' clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="3" clickHandler={this.handleClick}/>
                    <Button name='/' clickHandler={this.handleClick} />

                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick}/>
                    <Button name="." clickHandler={this.handleClick}/>
                    <Button name="=" clickHandler={this.handleClick}/>

                </div>

          </div>
```

# Pure components

You can make this a pure compoent https://www.fullstackreact.com/30-days-of-react/day-11/
Pure compoents are efficient
```javascript
    import React from 'react';
    import PropTypes from 'prop-types';
    import './button.css'


    export default class Button extends React.Component{
        PropTypes = {
            name: PropTypes.string,
            clickHandler: PropTypes.func
            }
            constructor(props){
                super(props)
                this.handleClick =  this.handleClick.bind(this)
            };
        handleClick(event){
            event.preventDefault();
            const {clickHandler} =  this.props
            clickHandler(this.props.name)
        }
        render(){
            return (
                <div className='button'>
                <button className='buttonname' 
                onClick={this.handleClick} >
                    {this.props.name}
                </button>
            </div>
            );
        }
    }

```

## Modular structure

Structure your code well.

Like 
```
/compoents
    /calc
        /panel
        /calc
    /small_compents
        /button
/utils
    /operations..
```

Its hard to tell the difrence between `cal` and `calculate` or `do_operations` and `do_operationstest`


## CSS Style naming

Googele BEM and OOCSS methodologies

## Use es6 when u can

```javascript
     PropTypes = {
        name: PropTypes.string,
        clickHandler: PropTypes.func
        }
        constructor(props){
            super(props)
            this.handleClick =  this.handleClick.bind(this)
        };
    handleClick(event){
        event.preventDefault();
        const {clickHandler} =  this.props
        clickHandler(this.props.name)
    }
    render(){
        return (
            <div className='button'>
            <button className='buttonname' 
            onClick={this.handleClick} >
                {this.props.name}
            </button>
        </div>
        );
    }
```

If I write `handleClick` as 
```javascript
    handleClick = (event) => {
        event.preventDefault();
        const {clickHandler} =  this.props
        clickHandler(this.props.name)
    }
```

Then I dont need this line `this.handleClick =  this.handleClick.bind(this)`

### Other cool things like
```javascript
    if(!obj.valone && obj.res){
        obj.ops = obj.newval;
        obj.valone=obj.res;
        obj.res=null
        return obj
    }   
```

Can become , Definately shorter and cuter.

```javascript
    if(!obj.valone && obj.res){
        return {...obj, ops: obj.newval, valone: obj.res, res: null}
    }  
```

### And even cuter syntax

```javascript
    case "+":
        handleOperaters(obj)            
        break
    case "-":
        handleOperaters(obj)            
        break
    case "x":
        handleOperaters(obj)            
        break
    case "/":
        handleOperaters(obj)            
        break
```

Can be better as because they all are handled by `handleOperaters(obj)`

```javascript
    case "+":
    case "-":
    case "x":
    case "/":
        handleOperaters(obj)            
        break
```

# Overal Feedback

I love what yu have done so far! Its awesome and keep at it. Make it pretty and add to your resume. It will pay off. JavaScript is easy and you may have found out that already. Explore es6 features and even es8.
Learn React topics like
- State anagement using Context and Redux
- High Order Components
- Functional Components
- Component Testing
- Data Visualization using Reactjs
