import styles from './style.module.css'

export default function Footer() {
  return (
    <div>
                <p>&copy; 2024 Your Website. All rights reserved. | <a href="#" onClick={()=>{alert("There is NO privacy online")}} >Privacy Policy</a> | <a href="#" onClick={()=>{alert("לתלונות לפנות ליוסף")}}>Terms of Service</a></p>

    </div>
  )
}
