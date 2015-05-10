var squidEntityTypeId = 12;
var guardianEntityTypeId = 13;

function newLevel(hasLevel) {
  clientMessage("Guardian Mod");
  clientMessage("by:");
  clientMessage("§7DanHerePE");
  clientMessage("§CJoePaleto");
  clientMessage("§3Xriomedabeast");
}

function useItem(x, y, z, itemId, blockId, side) {
}

function modTick() {
}

function attackHook(attacker, victim) {
}

function deathHook(attacker, victim) {
}

function entityAddedHook(entity) {
  if (Entity.getEntityTypeId(entity)==squidEntityTypeId) {
    spawnGuardian(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity), 30, "images/mob/guardian.png");
  } else {
  }
}

function entityRemovedHook(entity) {
}

function spawnGuardian(x, y, z, health, skin) { // am I doing it right?
  var guardian = Level.spawnMob(x, y, z, guardianEntityTypeId, skin); // entityId still pending to be decided!!!
  Entity.setHealth(guardian, health);
}
