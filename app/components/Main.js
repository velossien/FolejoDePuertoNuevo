var React = require('react');

var Main = React.createClass({
    render: function(){
        return (
            <div className='main-container'> 
                <div className="menubar">
                    <ul>
                        <li id="homelink"><a href="index.html">KEVIN GRIMM</a></li>
                        <li><a href="index.html">Contact</a></li>
                        <li><a href="index.html">Other Media</a></li>
                        <li><a href="index.html">Paintings</a></li>
                        <li><a href="index.html">Photos</a></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;