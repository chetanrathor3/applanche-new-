import { Component, OnInit, DoCheck } from '@angular/core';
import { map } from 'rxjs';
import { InsertBlogService } from 'src/app/services/insert-blog.service';
import { TeamService } from 'src/app/services/Team/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teamslistvar: any = '';
  data! : {
    _id:string
  }
  constructor(private team: TeamService) {}

  ngOnInit(): void {
    this.team.fetchTeams().pipe(map((response)=>{
      let zero:[]= []
     
      return zero;
    })).subscribe((data) => {
    });
  }

  deleteTeam(id: string) {
   this.data = {
    _id:id
   }
   console.warn(this.data);
    this.team.deleteTeamMember(this.data).subscribe((data) => {
    

      // console.log(data);
     
    });
  }
}
