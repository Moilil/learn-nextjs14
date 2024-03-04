import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => {
        return (
          <div className={styles.creditBox} key={credit.id}>
            {credit.profile_path ? (
              <img src={credit.profile_path} alt={credit.name} />
            ) : (
              <div className={styles.imgFallback}>
                <span>No Image</span>
              </div>
            )}
            <p className={styles.actorName}>{credit.name}</p>
            <p className={styles.cName}>{credit.character} 역</p>
          </div>
        );
      })}
    </div>
  );
}
