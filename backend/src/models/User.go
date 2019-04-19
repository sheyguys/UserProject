package models

type User struct {

	// User_ID 	string `json:"_id,omitempty"`
	Firstname	string `json:"firstname"`
	Lastname 	string `json:"lastname"`
	StudentID	string `json:"studentid"`
	Major		string `json:"major"`
	Email		string `json:"email"`
	Username	string `json:"username"`
	Password	string `json:"password"`
	// Gender		string `json:"gender"`
	// DateofBirth	string `json:"dateofbirth"`

}
type Users []User