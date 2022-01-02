import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">

        <input 
          type="text" 
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea 
        rows="5" cols="30"
          placeholder="What happend today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/09920ca2-8765-4fb8-9de2-20f017d2cf50/d6w1s15-4a30d250-3291-4450-94a1-dd91c40a1dc2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5OTIwY2EyLTg3NjUtNGZiOC05ZGUyLTIwZjAxN2QyY2Y1MFwvZDZ3MXMxNS00YTMwZDI1MC0zMjkxLTQ0NTAtOTRhMS1kZDkxYzQwYTFkYzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ye86o6eT5QinFnl72XXCUwBzgWPMbEth86SQxsqbe7M" 
            alt="imagen" 
          />
        </div>

      </div>

    </div>
  )
}
