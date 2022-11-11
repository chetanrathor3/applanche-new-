import { Component, OnInit, DoCheck } from '@angular/core';
import { InsertBlogService } from 'src/app/services/insert-blog.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teamslistvar: any = '';
  constructor(private team: InsertBlogService) {}

  ngOnInit(): void {
    this.team.fetchTeams().subscribe((data) => {
      this.teamslistvar = data;
    });
  }

  deleteTeam(id: any) {
    this.team.deleteTeamMember(id).subscribe((data) => {
      console.warn();

      console.log(data);
      this.team.fetchTeams().subscribe((data) => {
        this.teamslistvar = data;
      });
    });
  }
}
