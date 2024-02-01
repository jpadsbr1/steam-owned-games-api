require("dotenv").config()

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  getOwnedGames() {
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.SteamAPIKey}&steamid=${process.env.SteamUserID}&include_appinfo=true&include_played_free_games=true&format=json`

    const result = this.httpService
      .get(url)
      .pipe(
        map(response => (response.data))
      )

    return result
  }
}
