import React from 'react'

const Top_5_songs = () => {
    return (
        <div>
            <h2>Current Top 5 songs</h2>
            <table>
                    <tr>
                        <td>Song Name</td>
                        <td>Album</td>
                        <td>Release Year</td>
                        <td>Cover art</td>
                    </tr>

                    <tr>
                        <td>Scenic Drive</td>
                        <td>Scenic Drive</td>
                        <td>2021</td>
                        <td><img src='https://westcoaststyles.com/wp-content/uploads/2021/12/Khalid-Scenic-Drive-1024x683.jpg' alt='Scenic drive album cover'/></td>
                    </tr>

                    <tr>
                        <td>Wild Irish Roses</td>
                        <td>Blkswn</td>
                        <td>2017</td>
                        <td><img src='https://upload.wikimedia.org/wikipedia/en/6/61/Blkswn.JPG' alt='blckswn album cover art' /></td>
                    </tr>

                    <tr>
                        <td>Z4L</td>
                        <td>Noir</td>
                        <td>2018</td>
                        <td><img src='https://upload.wikimedia.org/wikipedia/en/e/e3/Smino-noir.jpg' alt='Noir album cover art'/></td>
                    </tr>

                    <tr>
                        <td>Amphetamine</td>
                        <td>Blkswn</td>
                        <td>2017</td>
                        <td><img src='https://upload.wikimedia.org/wikipedia/en/6/61/Blkswn.JPG' alt='blckswn album cover art' /></td>
                    </tr>

                    <tr>
                        <td>I Deserve</td>
                        <td>I Deserve</td>
                        <td>2021</td>
                        <td><img src='https://media.pitchfork.com/photos/618d53a03bc12adeed61a24f/3:4/w_1125,h_1500,c_limit/Smino.jpeg' alt='I deserve album cover art' /></td>
                    </tr>
            </table>
        </div>
    )
}

export default Top_5_songs
