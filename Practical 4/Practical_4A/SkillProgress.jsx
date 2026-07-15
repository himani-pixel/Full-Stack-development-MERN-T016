function SkillProgress() {
  return (
    <section className="section">
      <h2>Skill Progress</h2>
      <p>Total Skills : 12</p>
      <p>Completed Skills : 9</p>
      <p>Pending Skills : 3</p>
      <p>Progress : 75%</p>
      <div className="progress">
        <div className="progress-fill"></div>
      </div>
    </section>
  );
}

export default SkillProgress;