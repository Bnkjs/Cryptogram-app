import styled,{ css } from 'styled-components'
import PropTypes from 'prop-types';

export const Notif = styled.div`
  min-width: 100px;
  margin: 0 auto;
  padding: 1em 1em;
  border-radius: 10px;
  text-align: left;
  color: #2a2929;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8em;

  

  ${props => props.information && css`
     
    `}
  ${props => props.warning && css`
      border: .1em solid #F6E0BA;
      background-color: #FEF7EA;
    `}
  ${props => props.destructive && css`
      border: .1em solid #F9D8D0;
      background-color: #FCEDE9;
    `} 
`

export const NotifSuccess = styled(Notif)`
  border: .1em solid #C4E2CC;
  background-color: #EAF7EF;
`
export const NotifInfo = styled(Notif)`
  border: .1em solid #C9DDF5;
  background-color: #E6EFFA;
`
export const NotifWarning = styled(Notif)`
  border: .1em solid #f0d7aa;
  background-color: #FEF7EA;
`
export const NotifDestruct = styled(Notif)`
  border: .1em solid #F9D8D0;
  background-color: #FCEDE9;
`

