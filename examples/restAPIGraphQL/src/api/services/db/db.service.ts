import { Injectable } from '@nestjs/common';
import * as FakeDB from 'fake-db';

@Injectable()
export class DbService {
	private db;
	constructor() {
		this.db = new FakeDB([{
			"users": [{
					"id": 1,
					"name": "yehuda",
					"address": {
						"city": "ashdod"
					},
					"birthday": "08/01/85"
				},
				{
					"id": 2,
					"name": "Yohav",
					"address": {
						"city": "Rishon"
					},
					"birthday": "09/11/1998"

				},
				{
					"id": 3,
					"name": "chen",
					"address": {
						"city": "or yehuda"
					},
					"birthday": "19/09/1992"
				},
				{
					"id": 4,
					"name": "evgeny",
					"address": {
						"city": "Beer sheva"
					},
					"birthday": "16/12/1972"
				}
			]
		}, {
			"posts": [{
					"id": 1,
					"title": "learn nestJS Today",
					"content": "lorem ipsum....",
					"comments": "great post!"
				},
				{
					"id": 2,
					"title": "learn graphql Today",
					"content": "lorem ipsum...."
				},
				{
					"id": 3,
					"title": "TS 4.0 is available now!",
					"content": "lorem ipsum....",
					"comments": ""
				},
				{
					"id": 4,
					"title": "work from home in pandemic",
					"content": "lorem ipsum....",
					"comments": "so true"
				}
			]
		}, {
			"followers": [{
				"id": "Adbh676g",
				"name": "martin",
				"birthday": "08/01/85"
			}, {
				"id": "877g0",
				"name": "robert",
				"birthday": "09/11/1998"
			}, {
				"id": "5678",
				"name": "nathan",
				"birthday": "19/09/1992"
			}]
		}]);
	}

	async getUsers() {
		const result = await this.db.getCollection();
		return {"users":result?.[0].users};
	};

	async getUserById(idRank: string) {
		const result = await this.db.getCollection();
		return {"users":result?.[0].users?.[+idRank-1]};
	};

	async getPostByUserId(userId: string) {
		const result = await this.db.getCollection();
		if(userId === '1') {
			return {"posts":[result?.[1].posts?.[+userId-1]]};
		} else {
			return {"posts":[ result?.[1].posts?.[+userId-1], result?.[1].posts?.[+userId]]};
		}
	};

	async getFollowers(userId) {
		const result = await this.db.getCollection();
		if(userId === '1') {
			return {"followers":[result?.[2].followers?.[+userId-1]]};
		 } else {
		 	return {"followers":[ result?.[2].followers?.[+userId-1], result?.[2].followers?.[+userId]]};
		 }
	}
}
