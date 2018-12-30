import React, {Component} from 'react';
import './Home.css';
import homeImage from '../../assets/homeTop.png';

class HomeContent extends Component {
  
  render() {
    return(
      <div id='homePage'>
        <div className='topHomeContainer'>
          <img className='homeImage' alt='homeImage' src={homeImage}/>
          <div className='homeTitle'>Home Page</div>
        </div>
        <div className='homeParaContainer'>
          <div>
            <h1>Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum tincidunt dolor eget convallis. Etiam blandit suscipit lectus et tristique. Mauris ut ultrices nisl, sit amet laoreet libero. Proin euismod porta mollis. Sed fringilla non ante sed cursus. Curabitur nulla dolor, posuere eu nibh vel, elementum iaculis nisi. Maecenas nec quam fermentum, ultricies ipsum sit amet, malesuada est. In sed viverra augue, non vestibulum massa. Nullam eget auctor velit. Aliquam et euismod enim. Aliquam eget velit vel enim maximus consectetur quis id mauris. Nullam at elementum nunc.</p>
            <p>Praesent magna leo, dignissim sit amet est ac, facilisis luctus arcu. Nulla finibus nisl vitae dui convallis, id fringilla ante tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed semper commodo est non pretium. Cras lacinia enim at est finibus, ac porttitor tortor tempor. Proin placerat dignissim commodo. Vestibulum consectetur nunc metus, sit amet tempus lacus ullamcorper eu. Morbi malesuada mi neque, in ullamcorper justo molestie ut. Maecenas a congue ipsum. Sed iaculis, nulla sed mollis laoreet, nibh magna fringilla lectus, ut tempor ligula dui nec augue. Ut tempus tincidunt libero nec malesuada. Maecenas ex risus, blandit eget sapien aliquam, condimentum rutrum elit. Praesent non dui et velit rutrum dignissim. Morbi condimentum leo vel ornare iaculis. Pellentesque luctus, est at rutrum molestie, turpis nibh lacinia diam, at pulvinar massa ipsum sed lacus. Proin id nisl dignissim, tempus mauris a, molestie quam.</p>
          </div>
          <div>
            <h1>Vision</h1>
            <p>Aliquam erat volutpat. Nunc eget consectetur mauris. Donec convallis ultrices porta. Sed suscipit, nibh a pharetra blandit, risus massa sodales dolor, ultricies vulputate leo dui et dolor. Nam tempus venenatis interdum. Aenean imperdiet congue pulvinar. Donec dictum ipsum in justo feugiat, in facilisis augue congue. Nunc pharetra ac nulla ac vehicula. Morbi erat tellus, cursus et ultricies at, porta id est. Phasellus euismod magna libero, non facilisis orci mattis sit amet. Integer quis est a eros dapibus vestibulum sit amet vel est. Mauris tempus porta hendrerit.</p>
            <p>Nam nisl est, tempus eu lorem consectetur, vehicula rutrum ligula. Etiam erat erat, pretium id tempor ac, rutrum at nisl. Morbi id nibh non nibh consectetur porttitor gravida pellentesque ex. Vestibulum vitae iaculis metus, non porttitor lacus. Curabitur sed tempor nibh. Integer laoreet vel odio id molestie. In varius elit a mi elementum varius a in urna. Pellentesque ante quam, convallis eget vulputate convallis, suscipit nec arcu. Mauris a ornare leo, sed bibendum nibh. Morbi elit ligula, mattis ut ipsum eget, posuere sollicitudin mi. Morbi porttitor sem lorem, quis faucibus lorem sagittis sed. Phasellus fermentum orci nec diam tempus, quis ultricies libero finibus.</p>
          </div>
          <div>
            <h1>Values</h1>
            <p>Ut eget dui vehicula, egestas enim quis, consectetur leo. Cras ut mattis sem, ut eleifend tellus. Nam lectus quam, blandit ut est ac, molestie euismod felis. In nulla orci, vehicula vel vestibulum vitae, imperdiet et orci. Aenean porttitor vitae turpis a gravida. Vestibulum porta tempus lectus, ac faucibus erat tristique quis. In non ante eget augue finibus porttitor. In ac cursus lorem. Donec commodo malesuada sem. Donec tincidunt nibh et lectus tincidunt pretium. Maecenas lobortis leo in risus porta pulvinar. Cras sit amet iaculis purus, mollis tristique mauris. Phasellus consequat semper ipsum, sed cursus mauris commodo id. Cras sed lacus vitae diam tempor ultricies non non enim. Donec eget diam nec eros fringilla blandit. Etiam pretium eros massa, vel iaculis metus aliquet vitae.</p>
            <p>Curabitur in quam sed mi feugiat convallis non ut est. Proin sit amet orci sed lorem pellentesque volutpat. Curabitur in quam sit amet elit sollicitudin hendrerit. Sed pellentesque pulvinar mauris et fringilla. Phasellus a mollis neque. Curabitur sagittis erat a eros aliquam finibus. Donec a dignissim lacus, id imperdiet magna. Phasellus rhoncus mauris vel magna pretium, quis auctor dui aliquam. Nam dictum nisi metus, a porttitor arcu consequat vel.</p>
            <p>Aenean sodales, quam quis ultricies blandit, est leo vehicula elit, quis tristique nunc enim at neque. In a dolor at enim molestie suscipit. In sit amet feugiat lacus. Maecenas nec luctus est. Donec et erat in est volutpat ornare quis eget libero. Curabitur iaculis lacus feugiat laoreet tempor. Phasellus congue nisi felis, at elementum ligula convallis sit amet. Pellentesque in risus vitae lectus pretium dictum. Aliquam consequat augue ligula, quis lacinia justo hendrerit vel. Nulla mauris ante, ullamcorper eu laoreet sed, faucibus a libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce et nisl at metus pretium bibendum. Curabitur pharetra, ante quis facilisis tincidunt, purus quam placerat turpis, eget luctus nisi risus eu eros. Duis commodo tortor felis, a dictum quam vestibulum sed. Nulla aliquam luctus quam, a dapibus tellus faucibus ac.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent;