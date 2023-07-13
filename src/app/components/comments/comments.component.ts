import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from 'src/app/interfaces/comment.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  comments: Comment[] = [];
  @Input() modalId: number = 0;
  @Input() images: string[] = [];
  isLoading: boolean = true;
  
  profileImages:string[]=["https://media.istockphoto.com/id/1273863652/photo/young-hispanic-man-smiling-happy-talking-on-the-smartphone-at-street-of-city.jpg?s=612x612&w=0&k=20&c=KBVp_3nSqeSTSRpwU_6Xg16vRF-rLa9tYJS3rooTZFs=",]
  constructor(
    private modalService: NgbModal,
    private commentService: CommentService
  ) {}
  
  public open(modal: any): void {
    this.modalService.open(modal);
    this.commentService.getComments(this.modalId).subscribe((data) => {
      this.comments = data;
      this.isLoading = false;
    });
  }
}
