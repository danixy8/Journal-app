

export const JournalEntry = () => {
  return (
      <div className="journal__entry pointer">
        <div 
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b1ab731-95d1-4223-8c27-8f9f5b3730b5/d8t6w0j-86fbfe75-fa37-488c-859a-91be2f4c18d4.png/v1/fill/w_1024,h_1136,strp/wendy__gf__by_sandragh_d8t6w0j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiMWFiNzMxLTk1ZDEtNDIyMy04YzI3LThmOWY1YjM3MzBiNVwvZDh0Nncwai04NmZiZmU3NS1mYTM3LTQ4OGMtODU5YS05MWJlMmY0YzE4ZDQucG5nIiwiaGVpZ2h0IjoiPD0xMTM2Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMmIxYWI3MzEtOTVkMS00MjIzLThjMjctOGY5ZjViMzczMGI1XC9zYW5kcmFnaC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.AeY__0Ca7MB0D0-0QvR-SBH80lvbj0JmfR5GJrhOcDg)' 
          }}
        ></div>

        <div className="journal__entry-body">
          <p className="journal__entry-title">
            Un nuevo dia
          </p>
          <p className="journal__entry-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem labore nam itaque non assumenda blanditiis culpa qui, animi dolore voluptate veniam aut natus architecto fuga quidem harum corrupti alias minima?
          </p>
        </div>

        <div className="journal__entry-date-box">
          <span>Sunday</span>
          <h4>02</h4>
        </div>

      </div>
  )
}
