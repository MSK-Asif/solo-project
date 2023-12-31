import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiRegUrl = 'http://localhost:5000/register';
  private apiLoginUrl = 'http://localhost:5000/login';
  private apiProfileUrl = 'http://localhost:5000/profile';
  private apiUserBookingUrl = 'http://localhost:5000/findBooking';
  constructor(private http: HttpClient) {}

  createUserData(userData: any) {
    // console.log('service2:', userData); //user data is body
    return this.http.post(this.apiRegUrl, userData, { withCredentials: true }); //user gola backend e patacci
  }
  checkLoginData(userLoginData: any) {
    return this.http.post(this.apiLoginUrl, userLoginData, {
      withCredentials: true,
    });
  }

  isAuthenticatedFlag: boolean = false;
  async getProfileData() {
    try {
      const res = await axios.get(this.apiProfileUrl, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return error;
    }
  }
  findByEmail(email: string) {
  console.log(email,'==>>service');
    return this.http.get(this.apiUserBookingUrl, { params: { email } });
  }
}

