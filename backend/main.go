package main

import (
  //"fmt"
  //"time"
  //"CPEProject/config"
	"CPEProject/src/api"
  //"CPEProject/src/models"
  //"CPEProject/src/repository"
  "github.com/gorilla/handlers"
  "github.com/gorilla/mux"
  "net/http"
  "log"
)

func main() {

	//default USER
  router := mux.NewRouter()
	//User
	router.HandleFunc("/user/{email}", api.GetUserByEmail).Methods("GET")
	router.HandleFunc("/user/{firstName}/{lastName}/{studentid}/{major}/{email}/{username}/{password}", api.AddUser).Methods("GET")
  log.Fatal(http.ListenAndServe(":12345", handlers.CORS(handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD"}), handlers.AllowedOrigins([]string{"*"}))(router)))
  
}



// func updateProfile(profileRepository repository.ProfileRepository) {
//   var p model.Profile
//   p.ID = "U1"
//   p.FirstName = "Wuriyanto"
//   p.LastName = "Musobar"
//   p.Email = "wuriyanto_musobar@gmail.com"
//   p.Password = "12345678"
//   p.CreatedAt = time.Now()
//   p.UpdatedAt = time.Now()

//   err := profileRepository.Update("U1", &p)

//   if err != nil {
//     fmt.Println(err)
//   } else {
//     fmt.Println("Profile updated..")
//   }
// }

// func deleteProfile(profileRepository repository.ProfileRepository) {
//   err := profileRepository.Delete("U1")

//   if err != nil {
//     fmt.Println(err)
//   } else {
//     fmt.Println("Profile deleted..")
//   }
// }



// func getProfiles(w http.ResponseWriter, req *http.Request) {
// //
//   fmt.Println("Go Mongo Db")

//   db, err := config.GetMongoDB()

//   if err != nil {
//     fmt.Println(err)
//   }

//   profileRepository := repository.NewProfileRepositoryMongo(db, "Profile")

//   //
//   profiles, err := profileRepository.FindAll()

//   if err != nil {
//     fmt.Println(err)
//   }

//   for _, profile := range profiles{
//     fmt.Println("-----------------------")
//     fmt.Println(profile.ID)
//     fmt.Println(profile.FirstName)
//     fmt.Println(profile.LastName)
//     fmt.Println(profile.Email)
//   }
// }